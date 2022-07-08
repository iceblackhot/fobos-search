import React from 'react';
import './filters.scss';

export const Filters = () => {
  return (
    <div className="search-filters">
      <div className="search-filters__container">
        <div className="search-filters__header">
          <form>
            <input placeholder="Город" className="search-filters__input" type="text" />
            <button>Сброс</button>
          </form>
        </div>
        <div className="search-filters__viewport">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum qui laboriosam odit
            explicabo a, error vero praesentium esse harum iusto, nulla rem sint voluptas
            exercitationem ullam! Corporis iusto eligendi maxime?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Earum qui laboriosam odit explicabo a, error vero
            praesentium esse harum iusto, nulla rem sint voluptas exercitationem ullam! Corporis
            iusto eligendi maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum qui
            laboriosam odit explicabo a, error vero praesentium esse harum iusto, nulla rem sint
            voluptas exercitationem ullam! Corporis iusto eligendi maxime?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Earum qui laboriosam odit explicabo a, error vero
            praesentium esse harum iusto, nulla rem sint voluptas exercitationem ullam! Corporis
            iusto eligendi maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum qui
            laboriosam odit explicabo a, error vero praesentium esse harum iusto, nulla rem sint
            voluptas exercitationem ullam! Corporis iusto eligendi maxime?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Earum qui laboriosam odit explicabo a, error vero
            praesentium esse harum iusto, nulla rem sint voluptas exercitationem ullam! Corporis
            iusto eligendi maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum qui
            laboriosam odit explicabo a, error vero praesentium esse harum iusto, nulla rem sint
            voluptas exercitationem ullam! Corporis iusto eligendi maxime?
          </p>
        </div>
      </div>
      <div className="search-filters__container">
        <div className="search-filters__header">
          <form>
            <input placeholder="Улица" className="search-filters__input" type="text" />
            <button>Сброс</button>
          </form>
        </div>
        <div className="search-filters__viewport"></div>
      </div>
      <div className="search-filters__container">
        <div className="search-filters__header">
          <form>
            <input placeholder="Статус" className="search-filters__input" type="text" />
            <button>Сброс</button>
          </form>
        </div>
        <div className="search-filters__viewport"></div>
      </div>
      <div className="search-filters__container">
        <div className="search-filters__header">
          <form>
            <input placeholder="Сотрудник" className="search-filters__input" type="text" />
            <button>Сброс</button>
          </form>
        </div>
        <div className="search-filters__viewport"></div>
      </div>
    </div>
  );
};
