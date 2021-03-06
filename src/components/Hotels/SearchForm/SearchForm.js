import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { newFormDataAction } from '../../../store/formDataReducer';
import { fetchHotelsAction } from '../../../store/foundHotelsReducer';


function SearchForm() {

  const dispatch = useDispatch()
  const [data, setData] = useState({});

  useEffect(() => {
    const now = new Date();
    const todayDate = getDateString(now)
    const initialState = {
      location: 'Москва', 
      checkIn: todayDate,
      days: 1,
    }
    const checkOut = handleCheckOut(initialState)
    const searchParams = {
      location: initialState.location, 
      checkIn: initialState.checkIn,
      checkOut: checkOut,
    }

    setData(initialState)
    dispatch(newFormDataAction(initialState))
    dispatch(fetchHotelsAction(searchParams))
  }, [])

  function getDateString(date) {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    
    if(date.getMonth() < 10) {
      month = `0${date.getMonth() + 1}`
    }
    if(date.getDate() < 10) {
      day = `0${date.getDate()}`
    }

    const todayDate = `${year}-${month}-${day}`

    return todayDate
  }

  function handleChange(e) {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  function handleCheckOut(data) {
    const checkIn = new Date(data.checkIn);
    const newDate = new Date (checkIn.getTime() + (data.days * 24 * 60 * 60 * 1000))
    const newDateString = getDateString(newDate)
    return newDateString
  }

  function handleSubmit(e) {
    e.preventDefault();
    const checkOut = handleCheckOut(data)
    dispatch(newFormDataAction(data))
    const searchParams = {
      location: data.location, 
      checkIn: data.checkIn,
      checkOut: checkOut,
    }
    dispatch(fetchHotelsAction(searchParams))
  }

  return (
      <form className="search-form" onSubmit={handleSubmit} noValidate>
        <span className="search-form__input-name">Локация</span>
        <input value={data.location || ''} onChange={handleChange} name="location" className="search-form__input"></input>
        <span className="search-form__input-name">Дата заселения</span>
        <input value={data.checkIn || ''} onChange={handleChange} name="checkIn" className="search-form__input" type="date"></input>
        <span className="search-form__input-name">Количество дней</span>
        <input value={data.days || ''} onChange={handleChange} name="days" className="search-form__input" type="number"></input>
        <button className="search-form__submit" type="submit">Найти</button>
      </form>
  );
}

export default SearchForm;
