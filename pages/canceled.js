import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  return (
    <div className="success-wrapper">
      <div className="success">
        <h2>There is a Problem!</h2>
        
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Back to Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success