const { Ubicacion } = require('../models/index');

module.exports = {
    Get: async(req,res)=>{
        console.log("Holas")
        let ubicaciones = await Ubicacion.findAll({
            order:[
                ['descripcion','ASC']
            ]
        });
        res.json(ubicaciones);
    },
    GetById: async(req,res)=>{
        const id = req.params.id;
        try{
            let ubicacion = await Ubicacion.findAll({
                where: {
                    id: id
                }
            });
            res.status(200).json(ubicacion);
        }catch(err){
            res.status(500).json({
                error: 'Error al cargar la ubicacion',
                //msg: error.errors[0].message
            });
        }
    },
    Post: async(req,res)=>{
        const ubic = req.body;
        try {
            let ubicacion = await Ubicacion.create({
                codigo: ubic.codigo,
                descripcion: ubic.descripcion
            });
            
            if(ubicacion){
                res.status(200).json({
                    message: 'Ubicacion creada con éxito',
                    data: ubicacion
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
        const ubic = req.body;
        try {
            let ubicacion = await Ubicacion.update({
                codigo: ubic.codigo,
                descripcion: ubic.descripcion,
                },{
                where:{
                    id:req.params.id
                }
            });
            
            if(ubicacion){
                res.status(200).json({
                    message: 'Ubicacion actualizada con éxito',
                    data: ubicacion
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'Error al actualizar la ubicacion',
                //msg: error.errors[0].message
            });
        }
    },
    Del: async(req,res)=>{
        try {
            let ubicacion = await Ubicacion.destroy({
                where:{
                    id:req.params.id
                }
            });
            
            if(ubicacion){
                res.status(200).json({
                    message: 'Ubicacion eliminada con éxito',
                    data: ubicacion
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: 'Error al eliminar la ubicacion',
                //msg: error.errors[0].message
            });
        }
    }
}