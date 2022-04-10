import React from 'react';
import classNames from 'classnames';

import { EIconName } from './Icon.enums';
import './Icon.scss';

import ArrowCircleLeft from './ArrowCircleLeft';
import ArrowCircleRight from './ArrowCircleRight';
import Facebook from './Facebook';
import GooglePlus from './GooglePlus';
import Notification from './Notification';
import Phone from './Phone';
import Search from './Search';
import ShoppingBag from './ShoppingBag';
import Twitter from './Twitter';
import Youtube from './Youtube';
import MapMarker from './MapMarker';
import Mail from './Mail';
import ArrowLeft from './ArrowLeft';
import Plus from './Plus';
import Minus from './Minus';
import Close from './Close';
import Trash from './Trash';
import Filter from './Filter';
import CaretDown from './CaretDown';
import Star from './Star';
import AngleRight from './AngleRight';
import MapMarkerFill from './MapMarkerFill';
import PlusCircle from './PlusCircle';
import BookArrow from './BookArrow';
import Book from './Book';
import BookMark from './BookMark';
import Chat from './Chat';
import GridPlus from './GridPlus';
import L from './L';
import Locked from './Locked';
import Logout from './Logout';
import Question from './Question';
import UserSquare from './UserSquare';
import MailFill from './MailFill';
import Camera from './Camera';
import Website from './Website';
import PhoneFill from './PhoneFill';

const Icon = ({ name, className, color, onClick }) => {
  const renderIcon = () => {
    switch (name) {
      case EIconName.ArrowCircleLeft:
        return <ArrowCircleLeft color={color} />;
      case EIconName.ArrowCircleRight:
        return <ArrowCircleRight color={color} />;
      case EIconName.Facebook:
        return <Facebook color={color} />;
      case EIconName.GooglePlus:
        return <GooglePlus color={color} />;
      case EIconName.Notification:
        return <Notification color={color} />;
      case EIconName.Phone:
        return <Phone color={color} />;
      case EIconName.Search:
        return <Search color={color} />;
      case EIconName.ShoppingBag:
        return <ShoppingBag color={color} />;
      case EIconName.Twitter:
        return <Twitter color={color} />;
      case EIconName.Youtube:
        return <Youtube color={color} />;
      case EIconName.MapMarker:
        return <MapMarker color={color} />;
      case EIconName.Mail:
        return <Mail color={color} />;
      case EIconName.ArrowLeft:
        return <ArrowLeft color={color} />;
      case EIconName.Plus:
        return <Plus color={color} />;
      case EIconName.Minus:
        return <Minus color={color} />;
      case EIconName.Close:
        return <Close color={color} />;
      case EIconName.Trash:
        return <Trash color={color} />;
      case EIconName.Filter:
        return <Filter color={color} />;
      case EIconName.CaretDown:
        return <CaretDown color={color} />;
      case EIconName.Star:
        return <Star color={color} />;
      case EIconName.AngleRight:
        return <AngleRight color={color} />;
      case EIconName.MapMarkerFill:
        return <MapMarkerFill color={color} />;
      case EIconName.PlusCircle:
        return <PlusCircle color={color} />;
      case EIconName.BookArrow:
        return <BookArrow color={color} />;
      case EIconName.Book:
        return <Book color={color} />;
      case EIconName.BookMark:
        return <BookMark color={color} />;
      case EIconName.Chat:
        return <Chat color={color} />;
      case EIconName.GridPlus:
        return <GridPlus color={color} />;
      case EIconName.Locked:
        return <Locked color={color} />;
      case EIconName.L:
        return <L color={color} />;
      case EIconName.Logout:
        return <Logout color={color} />;
      case EIconName.Question:
        return <Question color={color} />;
      case EIconName.UserSquare:
        return <UserSquare color={color} />;
      case EIconName.MailFill:
        return <MailFill color={color} />;
      case EIconName.Camera:
        return <Camera color={color} />;
      case EIconName.Website:
        return <Website color={color} />;
      case EIconName.PhoneFill:
        return <PhoneFill color={color} />;

      default:
        return <></>;
    }
  };

  return (
    <div className={classNames('Icon', 'flex', 'justify-center', 'items-center', className)} onClick={onClick}>
      {renderIcon()}
    </div>
  );
};

export default Icon;
