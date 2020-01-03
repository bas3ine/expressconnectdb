module.exports = (sequelize,DataTypes)=>{
    const Reserve = sequelize.define('reserve',{
        date:{
            type: DataTypes.DATE
        }
    })
    return Reserve
    
}
