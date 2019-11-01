const generateVoteCount =  () =>  {
    return Math.floor((Math.random() * 50) + 15);
  }

  const posts = [
    {
      id: 1,
      title: 'AWS Fargate',
      description: 'AWS Fargate is a compute engine for Amazon ECS that allows you to run containers without having to manage servers or clusters.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      imageUrl: 'images/products/fargate.png',
    },
    {
      id: 2,
      title: 'AWS Robomaker',
      description: 'Robots are being used more widely in society for purposes that are increasing in sophistication such as complex assembly, environmental monitoring, search and rescue, cleaning, companionship, assisted surgery, picking and packing, and delivery.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: './images/avatars/kristy.png',
      imageUrl: './images/products/robomaker.png',
    },
    {
      id: 3,
      title: 'Amazon EC2 High Memory Instances',
      description: 'Today we are launching instances with 18 TiB and 24 TiB of memory.' ,
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/veronika.jpg',
      imageUrl: 'images/products/ec2.png',
    },
    {
      id: 4,
      title: 'Amazon Sagemaker',
      description: 'You can use Amazon SageMaker to easily train deep learning models on Amazon EC2 P3 instances, the fastest GPU instances in the cloud.' ,
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/molly.png',
      imageUrl: 'images/products/sagemaker.jpeg',
    }
  ];

  export { generateVoteCount, posts }
