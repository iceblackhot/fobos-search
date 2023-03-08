import './preloader.scss';

export const TableListPreloader = () => {
  return (
    <div className="stat-loader">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="text-box">
        <p>Загрузка...</p>
      </div>
    </div>
  );
};
