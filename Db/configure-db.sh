# Wait for SQL Server to start up
# See https://github.com/microsoft/mssql-docker/blob/master/linux/preview/examples/mssql-customize/configure-db.sh
DBSTATUS=1
ERRCODE=1
i=0

while [[ $i -lt 30 && ($DBSTATUS -ne 0 || $ERRCODE -ne 0) ]]; do
  i=$((i + 1))
  DBSTATUS=$(/opt/mssql-tools/bin/sqlcmd -S host.docker.internal -h -1 -t 1 -U sa -P $SA_PASSWORD -Q "SET NOCOUNT ON; Select SUM(state) from sys.databases")
  ERRCODE=$?
  sleep 1
done

# Exit the script if we do not get a successful response in time
if [[ $DBSTATUS -ne 0 || $ERRCODE -ne 0 ]]; then
  echo "SQL Server took more than 30 attempts to start up or one or more databases are not in an ONLINE state."
  echo "Error: $ERRCODE, DB state: $DBSTATUS"
  # because this is a bg task, if we fail here, the container will still be running but our startup scripts will not be applied
  # consider how you want to handle this
  exit 1
fi

echo "Creating database"
# Now, we can safely apply customisations with `sqlcmd`:
/opt/mssql-tools/bin/sqlcmd -S host.docker.internal -U sa -P $SA_PASSWORD -d master -i setup.sql