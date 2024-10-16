//import Image from "next/image";
import { Row, Col, Image} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
 
import React from 'react'

const page = () => {
  return (
    <>
    <div className="flex-bold bg-black text-white">page</div>
   
    <label className="search-col">
    <SearchOutlined />
    <input type="text" placeholder="Search" className="search-bar" />
    
    </label>


    <Row>
      <Col span={10} className='main-news'>

        <div className='main-news'>
          <Image className='peter-obi' src="/images/Peter-Obi.png" alt="Peter Obi" />
          <p style={{margin: "15px"}}>Jun 24 2022 </p>
          <p> <strong>lorem 4
            sentences of Lorem Ipsum, which looks like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget arcu.
            </strong> 
          </p>


          <p style={{marginTop: "15px"}}>
            consectetur adipiscing elit.
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget arcu.

            
          </p>
        
      
      </div>
        
      </Col>
      <Col span={10} >
      
        <div className='other-news'>

          <div className='first-other'>
            <Image className='first-ic' src="/images/wike.png"  style={{height: "100px", width: "1200px"}} />
            
            <p className='first-p'>March 22 2022</p>

            <p className='first-pp'> lorem 30
              sentences of Lorem Ipsum, which looks like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer nec odio. Praesent libero. 
            </p>
          </div>

          <div className='first-other'>
            <Image src="/images/download7.png" style={{height: "100px", width: "1200px"}} />
            <p>March 22 2022</p>
            <p> lorem 30
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget arcu.
            </p>
          </div>

          <div className='first-other'>
            <Image src="/images/wike.png" style={{height: "100px", width: "1200px"}}  />
            <p>March 22 2022</p>
            <p> lorem 30
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget arcu.
            </p>
          </div>


          
        </div>
      </Col>
    </Row>
    

    </>
  )
}

export default page