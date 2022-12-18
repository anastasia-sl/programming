console.log('open connection');

try {
  try {
    throw new Error('New Error');
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log('error: ', error);

    throw error;
  }

} catch (error) {
  console.log('ERROR: ', error);

} finally {
  console.log('close connection');
}
