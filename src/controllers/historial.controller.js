const { Historial } = require('../models/index');
const { Articulo } = require('../models/index');

module.exports = {
    Get: async (req, res) => {
        let historiales = await Historial.findAll({
            //attributes: ["id","fecha", "observacion"],
            include: [
                {
                    association: 'origen',
                    attributes: ['codigo', 'descripcion']
                },
                {
                    association: 'destino',
                    attributes: ['codigo', 'descripcion']
                }
            ]
        });
        res.json(historiales);
    },
    GetById: async (req, res) => {
        const id = req.params.id;
        try {
            let historiales = await Historial.findAll({
                //attributes: ["id","fecha", "observacion"],
                include: [
                    {
                        association: 'origen',
                        attributes: ['codigo', 'descripcion']
                    },
                    {
                        association: 'destino',
                        attributes: ['codigo', 'descripcion']
                    }
                ],
                where: {
                    id: id
                }
            });
            res.status(200).json(historiales);
        } catch (err) {
            res.status(500).json({
                error: 'Error al cargar la ubicacion',
                //msg: error.errors[0].message
            });
        }
    },
    GetByArtId: async (req, res) => {
        const id = req.params.id;
        try {
            let historiales = await Historial.findAll({
                //attributes: ["id","fecha", "observacion"],
                include: [
                    {
                        association: 'origen',
                        attributes: ['codigo', 'descripcion']
                    },
                    {
                        association: 'destino',
                        attributes: ['codigo', 'descripcion']
                    }
                ],
                where: {
                    articulo_id: id
                },
                order: [
                    ['id', 'DESC']
                ]
            });
            res.status(200).json(historiales);
        } catch (err) {
            res.status(500).json({
                error: 'Error al cargar la ubicacion',
                //msg: error.errors[0].message
            });
        }
    },
    Post: async (req, res) => {
        const histo = req.body;
        try {
            let historiales = await Historial.create({
                fecha: histo.fecha,
                observacion: histo.observacion,
                articulo_id: histo.articulo_id,
                origen_id: histo.origen_id,
                destino_id: histo.destino_id
            });

            if (historiales) {
                res.status(200).json({
                    message: 'Historial creado con éxito',
                    data: historiales
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'Error al crear el historial',
                //msg: error.errors[0].message
            });
        }
    },
    Put: async (req, res) => {
        const histo = req.body;
        try {
            let historial = await Historial.update({
                fecha: histo.fecha,
                observacion: histo.observacion,
                articulo_id: histo.articulo_id,
                origen_id: histo.origen_id,
                destino_id: histo.destino_id
            }, {
                where: {
                    id: req.params.id
                }
            });

            if (historial) {
                res.status(200).json({
                    message: 'Historial actualizado con éxito',
                    data: historial
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'Error al actualizar el historial',
                //msg: error.errors[0].message
            });
        }
    },
    Del: async (req, res) => {
        try {
            let historial = await Historial.destroy({
                where: {
                    id: req.params.id
                }
            });

            if (historial) {
                res.status(200).json({
                    message: 'Historial eliminado con éxito',
                    data: historial
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'Error al eliminar el historial',
                //msg: error.errors[0].message
            });
        }
    }
}