import React from 'react';

import ImageContact from '@/assets/images/image-contact.png';

import './Contact.scss';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-image">
        <img src={ImageContact} alt="" />
      </div>

      <div className="Contact-list flex flex-wrap justify-between">
        <div className="Contact-list-item flex items-center">
          <div className="Contact-list-item-icon">
            <Icon name={EIconName.PhoneFill} color={EIconColor.FUN_GREEN} />
          </div>
          <div className="Contact-list-item-info">
            <div className="Contact-list-item-title">Tổng đài</div>
            <div className="Contact-list-item-description">1900 8654</div>
          </div>
        </div>

        <div className="Contact-list-item flex items-center">
          <div className="Contact-list-item-icon">
            <Icon name={EIconName.MailFill} color={EIconColor.FUN_GREEN} />
          </div>
          <div className="Contact-list-item-info">
            <div className="Contact-list-item-title">Email</div>
            <div className="Contact-list-item-description">ebook@gmail.com</div>
          </div>
        </div>

        <div className="Contact-list-item flex items-center">
          <div className="Contact-list-item-icon">
            <Icon name={EIconName.Website} color={EIconColor.FUN_GREEN} />
          </div>
          <div className="Contact-list-item-info">
            <div className="Contact-list-item-title">Website</div>
            <div className="Contact-list-item-description">htpps://website.com</div>
          </div>
        </div>

        <div className="Contact-list-item flex items-center">
          <div className="Contact-list-item-icon">
            <Icon name={EIconName.Facebook} color={EIconColor.FUN_GREEN} />
          </div>
          <div className="Contact-list-item-info">
            <div className="Contact-list-item-title">Fanpage</div>
            <div className="Contact-list-item-description">w.w.w.book.vn</div>
          </div>
        </div>
      </div>

      <div className="Contact-address-list flex flex-wrap justify-between">
        <div className="Contact-address-list-item">
          <div className="Contact-address-list-item-title">Địa chỉ cơ sở 1: </div>
          <div className="Contact-address-list-item-description">Lorem ipsum dolor sit amet, consectetur </div>
        </div>
        <div className="Contact-address-list-item">
          <div className="Contact-address-list-item-title">Địa chỉ cơ sở 2: </div>
          <div className="Contact-address-list-item-description">Lorem ipsum dolor sit amet, consectetur </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
