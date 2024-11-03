Setup and run Web App:
 - Install pnpm (Can't use npm due to some weird issue resolving react version)
 - Navigate to Web folder and run `pnpm i`
 - Run `pnpm run dev`
 - Run `pnpm run test` for unit test
 
Run WebAPI
 - Run `docker compose up`
 
 
Assumptions
- No requirement to support deletes
- No requirement for strict form validation
- Created date time stamp is not needed for sale opportunity entity

Future Improvements
- Add better feedback and error handling around saving and editing
- Add better error handling when trying to open customer with invalid customer Id
- Add better form validation for all fields especially email, sale opportunity name and phone number
- Add better form feedback
- Show a blank input for creation datetime when adding new customer
- Add better organisation of package dev dependencies
- Add better generation of typescript typing from NSwag or create them manually
- Use form library like formik or react hook form 
- Refactor datetime formatting or use datetime component
- Refactor saleOpportunity component to get data as props instead so that it would be easier to test
- Setup Eslint
- Unit test for validation and saleOpportunity component
- Add created datetime stamp for sale opportunity
- Add modified datetime stamp for two entities for audit purposes