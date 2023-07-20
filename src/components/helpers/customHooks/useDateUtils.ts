const useDateUtils = () => {
    function formatDate(date: string) {
      return new Date(date).toLocaleDateString("es-ES");
    }
    return {
      formatDate,
    };
  };
  
  export default useDateUtils;
  