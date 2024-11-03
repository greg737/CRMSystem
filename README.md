Setup and run Web App:
 - Install pnpm (Can't use npm due to some weird issue resolving react version)
 - Navigate to Web folder and run `pnpm i`
 - Run `pnpm run dev`
 
Run WebAPI
 - Run `docker compose up`
 
 
Assumptions
- No requirement to support deletes


Future Improvements
- Better feedback and error handling around saving and editing
- Better error handling when trying to open customer with invalid customer Id
- Better form validation for all fields especially email, sale opportunity name and phone number
- Better form feedback
- Show a blank input for creation datetime when adding new customer