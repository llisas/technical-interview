import React from 'react';
import { useRouter } from 'next/router';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>{`Seré el detalle del personaje con id ${id} `} </h1>
     
    </div>
  );
};

export default Detail;

