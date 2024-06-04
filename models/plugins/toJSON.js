const toJSON = (schema) => {
    schema.set('toJSON', {
      virtuals: true,
      versionKey: false,
      transform: (doc, ret) => {
        delete ret._id;
      },
    });
  };
  
  export default toJSON;