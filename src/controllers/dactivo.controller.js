const { Dactivo } = require('../models/index');

module.exports = {
    Get: async (req, res) => {
        let activo = await Dactivo.findAll({
            include:[
                {
                    association: 'activo',
                    attributes:['activof']
                }
            ],
            order:[
                ['descripcion','ASC']
            ]
        });
        res.status(200).json(activo);
    },
    GetById: async (req, res) => {
        const id = req.params.id;
        try {
            let activo = await Dactivo.findAll({
                where: {
                    id: id
                }
            });
            res.status(200).json(activo);
        } catch (err) {
            res.status(500).json({
                err: 'Error al cargar activo fijo'
            })
        }
    },
    Post: async (req, res) => {
        const act = req.body;
        try {
            let activo = await Dactivo.create({
                codigo: act.codigo,
                descripcion: act.descripcion,
                activof_id: act.activof_id
            });

            if (activo) {
                res.status(200).json({
                    message: 'Activo creado con éxito',
                    data: activo
                });
            };
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: 'Error al crear el activo',
                //msg: error.errors[0].message
            });
        }
    },
    Put: async (req, res) => {
        const act = req.body;
        try {
            let activo = await Dactivo.update({
                codigo: act.codigo,
                descripcion: act.descripcion,
                activof_id: act.activof_id
            }, {
                where: {
                    id: req.params.id
                }
            });

            if (activo) {
                res.status(200).json({
                    message: 'Activo actualizado con éxito',
                    data: activo
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'Error al actualizar el activo',
                //msg: error.errors[0].message
            });
        }
    },
    Del: async (req, res) => {
        try {
            let activo = await Dactivo.destroy({
                where: {
                    id: req.params.id
                }
            });

            if (activo) {
                res.status(200).json({
                    message: 'Activo eliminado con éxito',
                    data: activo
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'Error al eliminar el activo',
                //msg: error.errors[0].message
            });
        }
    }
}