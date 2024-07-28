module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define("review", {
        rating: {
            type: DataTypes.INTEGER
        },
        instructorreview: {
            type: DataTypes.TEXT
        },
        description: {
            type: DataTypes.TEXT
        }

    })

    return Review

}