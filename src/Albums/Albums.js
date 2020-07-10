import React, { Component } from 'react';
import { fetchPhotos } from '../apiUtil';
import './Albums.scss';

const IMG_ALT = 'image can not access.';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlbumId: 1,
      photos: [],
    };
  }

  componentDidMount() {
    fetchPhotos(this.state.showAlbumId).then((photos) => {
      this.setState({
        photos: photos.slice(0, 3),
      });
    });
  }

  changeShowId = (showAlbumId) => {
    this.setState({
      photos: [],
      showAlbumId,
    });

    fetchPhotos(showAlbumId).then((photos) => {
      this.setState({
        photos: photos.slice(0, 3),
        showAlbumId,
      });
    });
  };

  render() {
    const { albums } = this.props;
    return (
      <section className="Albums">
        {albums.map((album) => (
          <div key={album.id} className="album" onClick={() => this.changeShowId(album.id)}>
            <p className="title">{album.title}</p>
            {album.id === this.state.showAlbumId ? (
              <div className="flex-wrapper">
                {this.state.photos.map((photo) => (
                  <div className="flex-box">
                    <img
                      key={photo.id}
                      src={photo.url}
                      title={photo.title}
                      alt={IMG_ALT}
                      width="150px"
                      height="150px"
                    />
                    <p>{photo.title}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div />
            )}
          </div>
        ))}
      </section>
    );
  }
}

export default Albums;
