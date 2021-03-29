
'use strict';

module.exports = (sequelize, DataTypes) =>
{
    const User = sequelize.define('User',
        {
            username:
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    required:true
                },
            password:
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    required:true
                },
            role:
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                    required:true
                },
            // id_commercant:
            //     {
            //         type: DataTypes.INTEGER,
            //         allowNull: false,
            //         references: {
            //             model: 'Professional',
            //             key: 'id'
            //         },
            //         onUpdate: 'restrict',
            //         onDelete: 'restrict'
            //     },
        });
       
    User.associate = function(models) {

    };

    return User;
};