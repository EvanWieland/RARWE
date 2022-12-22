export default function () {
  this.get('/bands');
  this.get('/bands/:id');
  this.get('/bands/:id/songs', (schema, request) => {
    const { id } = request.params;
    return schema.songs.where({ bandId: id });
  });

  this.post('/bands');
}
