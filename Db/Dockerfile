FROM mcr.microsoft.com/mssql/server:2022-CU13-ubuntu-22.04

USER root

# Bundle config source
COPY setup.sql setup.sql
COPY entrypoint.sh entrypoint.sh
COPY configure-db.sh configure-db.sh

# Grant permissions for to our scripts to be executable
RUN chmod +x entrypoint.sh
RUN chmod +x configure-db.sh

ENTRYPOINT ["./entrypoint.sh"]