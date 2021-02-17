const { Estado } = require('../models/index');

module.exports = {
    Get: async(req,res)=>{
        let estados = await Estado.findAll({
            order:[
                ['estado','ASC']
            ]
        });
        res.json(estados);
    },
    GetById: async(req,res)=>{
        const id = req.params.id;
        try{
            let estados = await Estado.findAll({
                where: {
                    id: id
                }
            });
            res.status(200).json(estados);
        }catch(err){
            res.status(500).json({
                error: 'Error al cargar el estado',
                //msg: error.errors[0].message
            });
        }
    },
    Post: async(req,res)=>{
        const esta = req.body;
        try {
            let estado = await Estado.create({
                estado: esta.estado
            });
            
            if(estado){
                res.status(200).json({
                    message: 'Estado creado con éxito',
                    data: estado
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
    Put: async(req,res)=>{
        const esta = req.body;
        try {
            let estado = await Estado.update({
                estado: esta.estado
                },{
                where:{
                    id:req.params.id
                }
            });
            
            if(estado){
                res.status(200).json({
                    message: 'Estado actualizado con éxito',
                    data: estado
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'Error al actualizar el estado',
                //msg: error.errors[0].message
            });
        }
    },
    Del: async(req,res)=>{
        try {
            let estado = await Estado.destroy({
                where:{
                    id:req.params.id
                }
            });
            
            if(estado){
                res.status(200).json({
                    message: 'Estado eliminado con éxito',
                    data: estado
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'Error al eliminar el estado',
                //msg: error.errors[0].message
            });
        }
    }
}