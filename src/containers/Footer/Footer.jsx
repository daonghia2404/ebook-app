import React from 'react';

import Logo from '@/assets/images/logo.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import ImageQRCode from '@/assets/images/image-qr.png';
import ImageAppStore from '@/assets/images/image-app-store.png';
import ImageGooglePlay from '@/assets/images/image-google-play.png';

import './Footer.scss';
import { Link } from '@reach/router';
import { Paths } from '@/pages/routers';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer-wrapper flex flex-wrap justify-between">
          <div className="Footer-col">
            <div className="Footer-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="Footer-description">GPKD số: 0302337190 cấp ngày 27 tháng 06 năm 2001</div>
            <div className="Footer-description">Bởi sở kế hoạch và đầu tư Tp. Hồ Chí Minh</div>

            <div className="Footer-info flex items-start">
              <div className="Footer-info-icon">
                <Icon name={EIconName.MapMarker} color={EIconColor.MAKO} />
              </div>
              <div className="Footer-info-label">
                Địa chỉ Công Ty: Số 75 Lô L, Đường số 2, Khu Dân Cư Phú Mỹ, Phường Phú Mỹ, Quận 7, Hồ Chí Minh
              </div>
            </div>

            <div className="Footer-info flex items-start">
              <div className="Footer-info-icon">
                <Icon name={EIconName.Phone} color={EIconColor.MAKO} />
              </div>
              <div className="Footer-info-label">Hotline: 094 456 5777</div>
            </div>

            <div className="Footer-info flex items-start">
              <div className="Footer-info-icon">
                <Icon name={EIconName.Mail} color={EIconColor.MAKO} />
              </div>
              <div className="Footer-info-label">Email: info@yfk.com.vn</div>
            </div>

            <div className="Footer-socials flex">
              <div className="Footer-socials-item">
                <Icon name={EIconName.Facebook} color={EIconColor.OLIVE_DRAB} />
              </div>
              <div className="Footer-socials-item">
                <Icon name={EIconName.Twitter} color={EIconColor.OLIVE_DRAB} />
              </div>
              <div className="Footer-socials-item">
                <Icon name={EIconName.GooglePlus} color={EIconColor.OLIVE_DRAB} />
              </div>
              <div className="Footer-socials-item">
                <Icon name={EIconName.Youtube} color={EIconColor.OLIVE_DRAB} />
              </div>
            </div>
          </div>

          <div className="Footer-col">
            <div className="Footer-title">Thông Tin</div>
            <div className="Footer-link">Giới thiệu</div>
            <div className="Footer-link">Tin tức</div>
            <Link to={Paths.PrivacyPolicy} className="Footer-link">
              Điều khoản chính sách
            </Link>
          </div>

          <div className="Footer-col">
            <div className="Footer-title">TẢI APP ĐỂ NHẬN ƯU ĐÃI</div>
            <div className="Footer-download flex">
              <div className="Footer-download-col">
                <div className="Footer-download-item qr">
                  <img src={ImageQRCode} alt="" />
                </div>
              </div>

              <div className="Footer-download-col">
                <div className="Footer-download-item">
                  <img src={ImageAppStore} alt="" />
                </div>
                <div className="Footer-download-item">
                  <img src={ImageGooglePlay} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
