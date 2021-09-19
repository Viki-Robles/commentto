export interface CommentsDataModel {
  id?: number
  name: string
  comment: string
  picture: string
}

export const commentsData: CommentsDataModel[] = [
  {
    id: 1,
    name: 'Klairh Sabaziwth',
    comment: 'Best socks ever! Unique Halloween experience!',
    picture:
      'https://github.com/Viki-Robles/commentto/blob/master/src/media/images/girl.jpeg?raw=true',
  },
  {
    id: 2,
    name: 'Leslie Vanni',
    comment: 'Do not buy these socks! Within an hour they were ripped off!',
    picture:
      'https://github.com/Viki-Robles/commentto/blob/master/src/media/images/man.jpeg?raw=true',
  },
  {
    id: 3,
    name: 'Margs Stones',
    comment:
      'It changed my life! I dont think I could leave without these socks.',
    picture:
      'https://github.com/Viki-Robles/commentto/blob/master/src/media/images/girlTwo.jpeg?raw=true',
  },
  {
    id: 4,
    name: 'Jorge Robles',
    comment: 'These socks have change the way I see the world!',
    picture:
      'https://github.com/Viki-Robles/commentto/blob/master/src/media/images/man.jpeg?raw=true',
  },

  {
    id: 5,
    name: 'Andreia Betenkourt',
    comment: 'The product is amazing I never had issues with it',
    picture:
      'https://github.com/Viki-Robles/commentto/blob/master/src/media/images/girl.jpeg?raw=true',
  },
]
