import React from 'react'
import Form from 'react-bootstrap/Form';

interface Props {
   data: any[]
   onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
   keyProp: string
   valProp: string
   value?: string
}

const MySelect: React.FC<Props> = ({ onChange, data, keyProp, valProp, value }) => {
   return (
      <Form.Control as="select" onChange={onChange} value={value}>
         {data.map((item) => {
            return <option
               key={item[keyProp]}
               value={item[keyProp]}>
               {item[valProp]}
            </option>
         })}
      </Form.Control>
   )
}

export default MySelect;
