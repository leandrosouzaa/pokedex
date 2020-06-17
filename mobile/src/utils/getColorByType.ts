export default function getColorByType(type: string): string {
   let color;

   switch (type) {
      case 'bug':
         color = '#72e072';
         break;

      case 'dark':
         color = '#7c7c7c';
         break;

      case 'dragon':
         color = '#47d1d1';
         break;

      case 'electric':
         color = '#ffce4b';
         break;

      case 'fairy':
         color = '#ff66a3';
         break;

      case 'fighting':
         color = '#ffa366';
         break;

      case 'fire':
         color = '#f7786b';
         break;

      case 'flying':
         color = '#538cc6';
         break;

      case 'ghost':
         color = ' #7575a3';
         break;

      case 'grass':
         color = '#48d0b0';
         break;

      case 'ground':
         color = ' #c68c53';
         break;

      case 'ice':
         color = '#66e0ff';
         break;

      case 'normal':
         color = ' #d2a679';
         break;

      case 'poison':
         color = ' #7c538c';
         break;

      case 'psychic':
         color = ' #ff80b3';
         break;

      case 'rock':
         color = ' #b1736c';
         break;

      case 'steel':
         color = '#85adad';
         break;

      case 'water':
         color = '#58abf6';
         break;

      default:
         color = '#999';
   }

   return color;
}
