// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // obeter a connectionString do banco de Dados (mongodb)
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
