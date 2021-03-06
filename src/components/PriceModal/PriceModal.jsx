import React , {useState} from 'react';
import { Modal, Button ,  ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import MarketChart from '../MarketChart/MarketChart';
import './PriceModal.css';




const PriceModal = (props) =>{

      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);
      
        var today = new Date();
        today = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const chartClass = 'btn btn-info';
        return (
            <div>
                <button color="info" onClick={toggle} className={chartClass}>Price Chart</button>
                <Modal isOpen={modal} toggle={toggle} contentClassName="custom-modal-style">
                    <ModalHeader toggle={toggle}>Graph for {today}</ModalHeader>
                    <ModalBody>
                      <MarketChart coinId={props.id} />
                    </ModalBody>
                    <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
}
export default PriceModal;
