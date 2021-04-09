const { Articulo } = require('../models/index');
const { Op } = require("sequelize");

module.exports = {
    Get: async (req, res) => {
        let articulos = await Articulo.findAll({
            //attributes: ["codigo","color","marca","serie","anio_c","valor_c","estado_id","ubicacion_id","dactivo_id"],
            include: [
                {
                    association: 'dactivo',
                    attributes: ['codigo', 'descripcion'],
                    include: {
                        association: 'activo',
                        attributes: ['activof']
                    }
                },
                {
                    association: 'ubicacion',
                    attributes: ['codigo', 'descripcion'],
                },
                {
                    association: 'estado',
                    attributes: ['estado']
                }
            ],
            order:[
                ['id','ASC']
                //['dactivo','descripcion','ASC']
            ]
        });
        res.status(200).json(articulos);
    },
    GetById: async (req, res) => {
        const id = req.params.id;
        try {
            let articulos = await Articulo.findAll({
                //attributes: ["id", "codigo", "articulo", "anio_c", "valor_c", "valor_d","ubicacion_id","estado_id"],
                include: [
                    {
                        association: 'dactivo',
                        attributes: ['codigo', 'descripcion'],
                        include: {
                            association: 'activo',
                            attributes: ['activof']
                        }
                    },
                    {
                        association: 'ubicacion',
                        attributes: ['codigo', 'descripcion'],
                    },
                    {
                        association: 'estado',
                        attributes: ['estado']
                    }
                ],
                where: {
                    id: id
                },
                order:[
                    ['codigo','ASC'],
                    ['dactivo','descripcion','ASC']
                ]
            });
            res.status(200).json(articulos);
        } catch (err) {
            res.status(500).json({
                error: 'Error al cargar el estado',
                //msg: error.errors[0].message
            });
        }
    },
    Post: async (req, res) => {
        const arti = req.body;
        try {
            let count = await Articulo.count({
                // where:{
                //     dactivo_id: arti.dactivo_id 
                // }
            });
            let articulo = await Articulo.create({
                codigo: arti.codigo+(count+1),
                color: arti.color,
                marca: arti.marca,
                serie: arti.serie,
                dactivo_id: arti.dactivo_id,
                anio_c: arti.anio_c,
                valor_c: arti.valor_c,
                valor_d: arti.valor_d,
                factura: arti.factura,
                estado_id: arti.estado_id,
                ubicacion_id: arti.ubicacion_id
            });

            if (articulo) {
                res.status(200).json({
                    message: 'Articulo creado con éxito',
                    data: articulo
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'Error al crear la ubicacion',
                //msg: error.errors[0].message
            });
        }
    },
    Put: async (req, res) => {
        const arti = req.body;
        try {
            let articulo = await Articulo.update({
                codigo: arti.codigo,
                color: arti.color,
                marca: arti.marca,
                serie: arti.serie,
                dactivo_id: arti.dactivo_id,
                anio_c: arti.anio_c,
                valor_c: arti.valor_c,
                valor_d: arti.valor_d,
                factura: arti.factura,
                estado_id: arti.estado_id,
                ubicacion_id: arti.ubicacion_id
            }, {
                where: {
                    id: req.params.id
                }
            });

            if (articulo) {
                res.status(200).json({
                    message: 'Articulo actualizado con éxito',
                    data: articulo
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'Error al actualizar el articulo',
                //msg: error.errors[0].message
            });
        }
    },
    Del: async (req, res) => {
        try {
            let articulo = await Articulo.destroy({
                where: {
                    id: req.params.id
                }
            });

            if (articulo) {
                res.status(200).json({
                    message: 'Estado eliminado con éxito',
                    data: articulo
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'Error al eliminar el estado',
                //msg: error.errors[0].message
            });
        }
    },
    GetByUbicacionId: async (req, res) => {
        const id = req.params.id;
        console.log(id);
        try {
            let articulos = await Articulo.findAll({
                //attributes: ["id", "codigo", "articulo", "anio_c", "valor_c", "valor_d","ubicacion_id","estado_id"],
                include: [
                    {
                        association: 'dactivo',
                        attributes: ['codigo', 'descripcion'],
                        include: {
                            association: 'activo',
                            attributes: ['activof']
                        }
                    },
                    {
                        association: 'ubicacion',
                        attributes: ['codigo', 'descripcion'],
                    },
                    {
                        association: 'estado',
                        attributes: ['estado']
                    }
                ],
                where: {
                    ubicacion_id: id
                },
                order:[
                    ['codigo','ASC'],
                    ['dactivo','descripcion','ASC']
                ]
            });
            res.status(200).json(articulos);
        } catch (err) {
            res.status(500).json({
                error: 'Error al cargar el estado',
                //msg: error.errors[0].message
            });
        }
    },
    search: async (req, res) => {
        const search = req.params.search;

        try {
            let articulos = await Articulo.findAll({
                //attributes: ["id", "codigo", "articulo", "anio_c", "valor_c", "valor_d","ubicacion_id","estado_id"],
                include: [
                    {
                        association: 'dactivo',
                        attributes: ['codigo', 'descripcion'],
                        include: {
                            association: 'activo',
                            attributes: ['activof']
                        }
                    },
                    {
                        association: 'ubicacion',
                        attributes: ['codigo', 'descripcion'],
                    },
                    {
                        association: 'estado',
                        attributes: ['estado']
                    }
                ],
                where: {
                    [Op.or]: [
                        {
                            codigo: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            color: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            marca: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            serie: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            anio_c: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            '$dactivo.descripcion$': {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            '$ubicacion.descripcion$': {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            '$estado.estado$': {
                                [Op.like]: `%${search}%`
                            }
                        }
                    ]
                },
                order:[
                    ['codigo','ASC'],
                    ['dactivo','descripcion','ASC']
                ]
            });
            res.status(200).json(articulos);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: 'Error al cargar el articulo',
                //msg: error.errors[0].message
            });
        }
    },
    searchByUbicacion: async (req, res) => {
        const search = req.params.search;
        const ubicacion = req.params.ubicacion;
        try {
            let articulos = await Articulo.findAll({
                //attributes: ["id", "codigo", "articulo", "anio_c", "valor_c", "valor_d","ubicacion_id","estado_id"],
                include: [
                    {
                        association: 'dactivo',
                        attributes: ['codigo', 'descripcion'],
                        include: {
                            association: 'activo',
                            attributes: ['activof']
                        }
                    },
                    {
                        association: 'ubicacion',
                        attributes: ['codigo', 'descripcion'],
                    },
                    {
                        association: 'estado',
                        attributes: ['estado']
                    }
                ],
                where: {
                    
                    ubicacion_id: ubicacion,

                    [Op.or]: [
                        {
                            codigo: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            color: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            marca: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            serie: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            anio_c: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            '$dactivo.descripcion$': {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            '$ubicacion.descripcion$': {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            '$estado.estado$': {
                                [Op.like]: `%${search}%`
                            }
                        }
                    ]
                }
            });
            res.status(200).json(articulos);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: 'Error al cargar el articulo',
                //msg: error.errors[0].message
            });
        }
    }
}