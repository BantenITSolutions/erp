Ext.define("GatotKacaErp.module.Personal.store.ChangePassword",{extend:"Ext.data.Store",model:"GatotKacaErp.module.Personal.model.ChangePassword",proxy:{type:"ajax",api:{read:BASE_URL+"utilities/user/getpassword"},actionMethods:{read:"POST"},reader:{type:"json",root:"data",successProperty:"success",totalProperty:"total"},writer:{type:"json",writeAllFields:true,root:"data",encode:true}}});