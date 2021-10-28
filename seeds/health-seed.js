const { Health } = require('../models');

const healthData = [
  {
    health_name: 'hip dysplasia',
    description: 'genetic condition in which the thighbone does not fit properly into the hip joint, can cause pain or lameness.'
  },
  {
    health_name: 'allergies',
    description: 'food, contact, or inhalant allergic reactions'
  },
  {
    health_name: 'hypothyroidism',
    description: 'disorder of the thyroid gland responsible for conditions such as epilepsy, alopecia, obesity, lethargy, and skin conditions.'
  },
  {
    health_name: 'progressive retinal atrophy (pra)',
    description: 'eye diseases that cause the gradual deterioration of the retina, can cause night blindness.'
  },
  {
    health_name: 'umbilical hernia',
    description: 'protrusion of abdominal fat or internal organs against the abdominal wall near the umbilicus.'
  },
  {
    health_name: 'von willebrand disease',
    description: 'blood disorder that affects the clotting process causing high risk of bleeding.'
  },
  {
    health_name: 'hemorrhagic gastroenteritis',
    description: 'digestive disorder that causes vomiting and diarrhea with fresh or digested blood.'
  },
  {
    health_name: 'cancer',
    description: 'tumors and other malignant growths.'
  },
  {
    health_name: 'patellar luxation',
    description: 'common problem caused when the patella is not properly lined up.'
  },
  {
    health_name: 'legg-perthes disease',
    description: 'deformity of the ball of the hip joint that causes wearing and arthritis.'
  },
  {
    health_name: 'heart murmurs',
    description: 'disturbance in the blood flow through the chambers of the heart.'
  },
  {
    health_name: '',
    description: ''
  },
  {
    health_name: '',
    description: ''
  },
  {
    health_name: '',
    description: ''
  },
  {
    health_name: '',
    description: ''
  },
  {
    health_name: '',
    description: ''
  },
  {
    health_name: '',
    description: ''
  },
  {
    health_name: '',
    description: ''
  }
];

const seedHealth = () => Health.bulkCreate(healthData);

module.exports = seedHealth;
