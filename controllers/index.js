const { Bird } = require('../models');


const createBird = async (req, res) => {
    try {
      const bird = await Bird.create(req.body);
      return res.status(201).json({
        bird
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  const getAllBirds = async (req, res) => {
    try {
      const birds = await Bird.findAll();
      return res.status(200).json({ birds });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getBirdById = async (req, res) => {
    try {
      const { id } = req.params;
      const bird = await Bird.findOne({
        where: { id: id },
      });
      if (bird) {
        return res.status(200).json({ bird });
      }
      return res.status(404).send('Bird with the specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getBirdByType = async (req, res) => {
    try {
      const { type } = req.params;
      const bird = await Bird.findOne({
        where: { type: type },
      });
      if (bird) {
        return res.status(200).json({ bird });
      }
      return res.status(404).send('Bird with the specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getBirdByCity = async (req, res) => {
    try {
      const { city } = req.params;
      const bird = await Bird.findOne({
        where: { city: city },
      });
      if (bird) {
        return res.status(200).json({ bird });
      }
      return res.status(404).send('Bird with the specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateBird = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Bird.update(req.body, {
        where: { id: id }
      });
      if (updated) {
        const updatedBird = await Bird.findOne({ where: { id: id } });
        return res.status(200).json({ bird: updatedBird });
      }
      throw new Error('Bird not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteBird = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Bird.destroy({
        where: { id: id }
      });
      if (deleted) {
        return res.status(204).send('Bird deleted');
      }
      throw new Error('Bird not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  module.exports = { 
    createBird,
    getAllBirds,
    getBirdById,
    getBirdByType,
    getBirdByCity,
    updateBird,
    deleteBird
  }