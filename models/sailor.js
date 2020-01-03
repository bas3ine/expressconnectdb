module.exports = (sequelize, DataTypes) => {
    const Sailor = sequelize.define('sailor', {
        name: {
            type: DataTypes.STRING(45)
        },
        rating: {
            type: DataTypes.INTEGER
        },
        age: {
            type: DataTypes.DOUBLE,
            validate:{
                min:1,
                max:100,
            }
        }
    })
    Sailor.associate = (models)=>{
        Sailor.belongsToMany(models.boat,{through:models.reserve })
    }

    return Sailor
}