import React from 'react'
import { useState } from 'react'

import {Alex} from '../../../Assets/alex jonathan.jpg'
export const Contact = () => {

    const data = [
        { id: 1, name: "alex jonathan" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
      ];

      const imageSizes = [
        { name: "horizontal", width: 600, height: 380 },
        { name: "vertical", width: 400, height: 650 },
        { name: "thumbnail", width: 300, height: 300 },
      ];
    const [contact, setContact] = useState(0);
    return (
        <div className="users">
      {data.map((user) => (
        <div className="user">{user}</div>
      ))}
    </div>
    )
}
