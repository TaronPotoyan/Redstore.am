
class Sevrice  {
   async fetchProducts (url : string) {
      try {
        const response = await fetch(url); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;  

      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;  
      }
  }

  
}






const service_obj = new Sevrice();

export default service_obj;