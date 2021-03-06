// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Collection = sequelize.define('collection', {
    collectionId: {
      type: DataTypes.INTEGER,
      field: 'collection_id',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      field: 'name',
      allowNull: false
    },
    collectionVideoUrl: {
      type: DataTypes.STRING,
      field: 'collection_video_url',
    },
    aboutCollection: {
      type: DataTypes.STRING,
      field: 'about_collection',
    },
    collectionProcess: {
      type: DataTypes.STRING,
      field: 'collection_process',
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active',
      defaultValue: Sequelize.literal('true'),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'collection',
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v5/reference-guide/relationships#adding-relationships.
  Collection.associate = (models) => {
  };

  return Collection;
};
