Ext.define("GatotKacaErp.module.Personal.store.Profile",{extend:"GatotKacaErp.store.Base",model:"GatotKacaErp.module.Personal.model.Profile",proxy:{type:"ajax",api:{read:BASE_URL+"human_resources/employee/profile"},actionMethods:{read:"POST"},reader:{type:"json",root:"data",successProperty:"success",totalProperty:"total"},writer:{type:"json",writeAllFields:true,root:"data",encode:true}}});