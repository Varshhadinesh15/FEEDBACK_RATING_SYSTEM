module.exports = (sequelize, DataTypes) => {

    const Course = sequelize.define("course", {
        
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        instructor: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.INTEGER
        },
        published: {
            type: DataTypes.BOOLEAN
        }
    
    })

    return Course

}