import router from './app';

export default (): void => {
  try {
    const app = router();
    app.listen(process.env.PORT ?? 8080, () => {
      console.log('Server is Running!');
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
