# Job Search Project
This project is a job search application built using React as a frontend, where job postings are fetched through web scraping using Puppeteer from various job posting websites.

## Features

- Search for jobs by keywords, location, and job type.
- Filter jobs by salary, company, and job level.
- View job details including job description, company information, and application instructions.
- Save favorite jobs to view later.

## Technologies Used

- React
- Puppeteer
- HTML/CSS
- JavaScript

## Installation

1. Clone the repository.
2. Install dependencies using `yarn`.
3. Run the application using `yarn dev`.

## Usage

1. Enter keywords, location, and job type in the search bar.
2. Use filters to narrow down results.
3. Click on a job posting to view more details.
4. Save favorite jobs by clicking the heart icon.
5. View saved jobs by clicking the "Saved Jobs" button in the header.

## Limitations

- The accuracy of job postings may not be guaranteed as they are fetched through web scraping.
- The application may not work properly if the job posting websites change their HTML structure.

## Future Improvements

- Implement user authentication and allow users to apply for jobs through the application.
- Add more job posting websites to increase the number of job postings available.
- Improve the accuracy of job postings by implementing machine learning algorithms to filter out irrelevant results. 

## Acknowledgements

- The job postings are fetched using Puppeteer, a Node.js library for controlling a headless Chrome browser.
