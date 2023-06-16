import Meter from "../components/Meter"
import React from "react";

export default function Skill() {
  return (
    <div className='flex-1 min-h-fit mt-9'>
      <div className='mb-4  pb-2 max-h-fit'>
        <p className='text-4xl font-bold'>Skill</p>
        <div className='border-b-2 max-h-fit'></div>
      </div>
      <div className="flex justify-center">
        <div className="flex sm:flex-row flex-col leading-8">
          <div className="flex-1 mr-2">
            <Meter
              label="PHP"
              value={90}
            />
            <Meter
              label="HTML"
              value={100}
            />
            <Meter
              label="CSS"
              value={70}
            />
            <Meter
              label="Javascript"
              value={80}
            />
            <Meter
              label="SQL"
              value={75}
            />
            <Meter
              label="Jquery"
              value={80}
            />
            <Meter
              label="Laravel"
              value={80}
            />
            <Meter
              label="Codeigniter"
              value={80}
            />
            <Meter
              label="Bootstrap"
              value={90}
            />
          </div>
          <div className="flex-1">
            
            <Meter
              label="React Js"
              value={70}
            />
            <Meter
              label="Tailwind"
              value={70}
            />
            <Meter
              label="Mysql"
              value={70}
            />
            <Meter
              label="Postgree"
              value={70}
            />
            <Meter
              label="MongoDB"
              value={60}
            />
            <Meter
              label="Rest API"
              value={80}
            />
            <Meter
              label="Graphql"
              value={60}
            />
            <Meter
              label="Docker"
              value={60}
            />
            <Meter
              label="Flutter"
              value={60}
            />
          </div>
        </div>
      </div>

    </div>
  )
}