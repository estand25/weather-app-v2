import React, { useState, useEffect } from 'react';
import {
  FetchService,
  FormatService,
  GenerateCalendarService,
} from '../service';
import { DayOfWeekForcast } from '../components';
import { useSelector, useDispatch } from 'react-redux';

const Forcast = () => {
  const [weekly, setWeekly] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [zip, setZip] = useState('19475');
  const [error, setError] = useState('');

  const asyncOpenData = async () => {
    return await FetchService.fetchJson(
      `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&cnt=40&units=imperial&appid=fff46882afbf25c4f00498e88eb69975`,
      'get'
    );
  };

  const populateIconList = () => {
    asyncOpenData().then((i) => {
      var weeklyData = FormatService.JsonDailyWeather(i);

      var dayOfWeek = FormatService.JsonWeatherDayOfWeek(weeklyData);

      var icons = FormatService.JsonWeatherIcon(weeklyData);

      var generatedWeekly = GenerateCalendarService.GenerateWeeklyCards(
        dayOfWeek,
        weeklyData.map((i) => i.main.temp_max),
        weeklyData.map((i) => i.main.temp_min),
        icons
      );

      setWeekly(generatedWeekly);
      setLoading(true);
    });
  };

  useEffect(() => {
    populateIconList();
  }, []);

  const onSubmitClick = async () => {
    if (zip.length != 5 && typeof zip != Number) {
      setError('Invalid zip');
    } else {
      populateIconList();
      setError('');
    }
  };

  if (!isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="form-group">
      <input
        id="zip-input"
        className="form-control"
        style={{ margin: 5 }}
        type="text"
        value={zip}
        onChange={(un) => setZip(un.target.value)}
      />
      <button
        id="submit-btn"
        className="btn btn-success"
        style={{ margin: 5 }}
        onClick={onSubmitClick}
      >
        Submit
      </button>
      <div className="row">
        <div className="row">
          <label className="error-label">{error}</label>
        </div>
        {weekly.map((w) => (
          <DayOfWeekForcast key={w.id} {...w} />
        ))}
      </div>
    </div>
  );
};

export default Forcast;
