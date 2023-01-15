
const getAllJobs = async (req, res) => {
    res.send('All Jobs');
};

const getJob = async (req, res) => {
    res.send('Single Job');
};

const createJob = async (req, res) => {
    res.send('creTE Job');
};

const updateJob = async (req, res) => {
    res.send('creTE Job');
};

const deleteJob = async (req, res) => {
    res.send('delete Job');
};

module.exports = { 
    getAllJobs,
    getJob,
    updateJob,
    createJob,
    deleteJob,
};