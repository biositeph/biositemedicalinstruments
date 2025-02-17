let searchButton = document.getElementById('search-button');
let resultsSection = document.getElementById('results-section');
let jobCount = document.getElementById('job-count');
let jobModal = document.getElementById('job-modal');
let closeModal = document.getElementById('close-modal');
let jobDetails = document.getElementById('job-details');

const jobs = [
    { id: 1, type: 'luzon', location: 'San Juan ', position: 'Software Developer' },
    { id: 2, type: 'visayas', location: 'Davao', position: 'Graphic Designer' },
    { id: 3, type: 'luzon', location: 'NCR', position: 'Product Manager' },
    { id: 4, type: 'mindanao', location: 'Davao', position: 'Marketing Specialist' },
    { id: 5, type: 'visayas', location: 'Cebu', position: 'Graphic Designer' },
    { id: 6, type: 'mindanao', location: 'Davao', position: 'Information Security Associate' }
];

searchButton.addEventListener('click', () => {
    const jobType = document.getElementById('job-type').value;
    const jobLocation = document.getElementById('job-location').value.trim().toLowerCase();

    const filteredJobs = jobs.filter(job => 
        (jobType === '' || job.type.toLowerCase() === jobType.toLowerCase()) &&
        (jobLocation === '' || job.location.toLowerCase().includes(jobLocation))
    );

    resultsSection.innerHTML = '';

    if (filteredJobs.length === 0) {
        resultsSection.innerHTML = '<p>No jobs found. Please try different filters.</p>';
    } else {
        filteredJobs.forEach(job => {
            const jobItem = document.createElement('div');
            jobItem.classList.add('job-item');

            jobItem.innerHTML = `
                <div>
                    <strong>${job.position}</strong><br>
                    ${job.type} - ${job.location}
                </div>
                <button class="view-button" data-id="${job.id}">View</button>
            `;

            resultsSection.appendChild(jobItem);
        });
    }

    jobCount.textContent = filteredJobs.length;
});

resultsSection.addEventListener('click', (event) => {
    if (event.target.classList.contains('view-button')) {
        const jobId = event.target.getAttribute('data-id');
        const job = jobs.find(j => j.id == jobId);

        if (job) {
            jobDetails.textContent = `Position: ${job.position}\nType: ${job.type}\nLocation: ${job.location}`;
            jobModal.style.display = 'flex';
        }
    }
});

closeModal.addEventListener('click', () => {
    jobModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === jobModal) {
        jobModal.style.display = 'none';
    }
});