import React from 'react'
import './Home.css';
import Product from './Product.js';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
          <img className="home_image" src="https://mediashotz.co.uk/wp-content/uploads/2022/09/samsung_ads_masthead.jpg" alt='img'/>
          <div className='home_row'>
              <Product 
              title='the lean startup' 
              price={29.99}
              image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVEhgWFRIYGRgaFRoYGBgYEhkYEhIVHBgZGRgYGBgcIS4lHB4rIRgYJjgmKzExNTU1HCQ7QDszPy40NTEBDAwMEA8QHxISHDQrJCM0NDQ0MTU0MTQ0NDQ0NDQxMTQ0NDQ0MTQ0NjQ0NDQ0NDQ0NDQ0NDQ0MTQxNDQ0ND80NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABQECAwQGB//EAEEQAAIBAgQCBggCBwcFAAAAAAECAAMRBBIhMQVBIjJRYXGBBhNCcpGhscEzUhQjYrLR4fAHJDSCksLxFXN0orP/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQIDBP/EACMRAQEAAwACAgMBAQEBAAAAAAABAgMRITESMiJBYVEToQT/2gAMAwEAAhEDEQA/APZoiICIiAiIgamOxQprci9zYDvtf7TTbHuQLBR4gmQX9p2Kang1ZKrU2FZcpVcxY5XspBIFj3322MiuE8fFYUUTpVKiZmVW6NIL12c+yL6AbkkeM0xxljLK2V2P/UKgGy6dit/GbNHGki5X5yAxnG8Phx6t6i+sKlglyWNrflBIvra+9j2TW/6rUqVP1FN8uYI1RgpFtugpcagsbn9k6HQS3xl8SEtk7a6r9OW+oIlwx1P81vEGRtKnkUhiWuSSxNzrytyHdMD1FJNrW8YmuVGWdxTy4lDsw+MvDA7Gc7eLxdP9RN38dJeJz61nGzN/qMyDGVB7fxAMrdVWm2JyJDLxJ+eU+UyLxM81HkZH/PJb/pilYkeOJpzUj4GZF4jTPO3iJHxy/wAJnj/rciYFxaH2x8bfWZVcHYg+BvK8WllXxEQkiIgIiICIiAiIgIiICIiByH9o/DnxGEWmhQMawILkgaJUOlgdf5zzr0I4iuExbUKtPpO/qjUz2VCCbXDWBUkaHQ6z1v0ip3RD+WpmHiUdf9xnjfpxgXp4oVQwAqXIOtwyKoObNca35aTXGfj1lcvy+L1jEZT0hY6WuLH5zT/RQr50Cg+0AAucc7sNzrfW+3LeYfRLCBOHUs9TMvqw4axVUQjMF15AcyBp4SYZLLltc/Qf0JrjlPTLLG97Vj1SdL6W+c02wgLA32bNt+0jW09z5zYgsBqb2AJNt9uUtJIrcrl7aiYf9WFDXtmFxdb9EruDoQfpHqnHt3Nl5mxIY5yF2Fxb5zHw/FL+iUqjuoU0UYsSFAWwsW5AnS/eSJYvHMKUulZHYi6IrZqjnkAi3b5R1HL1sD1oOuozN+XqaZbd+485Q1qlrlfZFwAetZrgG9rXA/1TM9dBbM6gkAgEgNrtoZe0k9NZsVa910AvfXXpW25aEHw8DKvilA7ekV0N7EX/AIfMTLeUYdojinVgxS9/LltcEi/wPwMvGIQ7Hlc9lrBt/Ag+ctyL2D4dxH0JlGoLrpuORI5W5d0HWUOL2uL9l9e/STPB+ofeP0EgPVDNfW4ud+ZAB+Qk/wAG6h94/QTLb6bab+SRiInO6iIiAiIgIiICIiAiIgIiIEP6R1FWjmY2ANyewBWJ+k4psNheJUwpZsqve6kLURrHe4IsQ3ncSf8A7R2f9CyqpJeqiWAJbW+wHhOR9DcEUzOz65QrUypU03Dtcg+2p5HWxDd821+Zxz7JzL5MuN4ZxCgKeFp1ErUXJFLOLPh0UWOci11Ct268gNAeqp1sVTQrUVajkqFanTcJZjlJdS2mX3tb7jUjncTxs4fGOCgbOlJEL1CgQ9wAbQ5mJNhtbXSdOzYlLvZXGU/qwwVgxN1yswANr5dbaWPdFnK0l+WPtixOKCUnqOB+rQs4BuFYLcqSOfKcPj/TxnplKVIo7aBywYqO0LbVuXz7pN8eOIw3Da2dUb1rtmCsf1IrWDcrN0y+1tWG+85L0L42mHqOrqSrgZQlPNULggKBrsQW87S0yt8KXXMf62uDcHqIFrYjDmqj03qsrM6NRFNwGLU2ADkgqQvMTp8BxbAAAoq0+la5wzJZrHrOUsNL6k7XkjwT0gpYpCU9lrFHyioFtoSAx6J7f4TbrBicwY3Hf0WXsI+h3HhcG2M4pnZVlLiNJ8pR1cNsUOdT3lluBtvMjGR2Pw1OiwqEZUtZwF0W+ocEaoRY3I7Sd5vhgQCDcdt73lopkpaViJLNSIiBUyZ4L+GfeP0EhZNcG/DPvH6CZ7fTbT9klEROZ1kREBERAREQEREBERAREQIj0hphqQvycEHsIBsRIB3VFJJAVVJJ5KoFz5ACdNxdQUW/5h9DOG9M8caNECmgd6udcm+VMjF3svIaC+3SE312TFz7cbcvCG9F6SYrF1sS9PqsuTpAqr+FhmIABBO1+ZnoC1jlAPx5zlPQfDFMGCVyhmupsMzjKLuSNwTmA7gO2dMu01mPjyyyyveRx/8AaRjcSqIosKDaOQoJZxqFe9xbmO8dwlmH9E8LiMNTqIcjtRQEqp9WXHXZkuCTfMOsJ0PpMXGDq5BqyhASbKpdlS5J5DNfymfhWFXC4YIoLimhJtYM27Owud+sbeUpZJ2tJbeRCcE9HqeCrhquLS5VxTUIKfrEBXOaje2RmWyk6X0vy68DUOLFdLEG9xbfwmi2EovUSo4vkDsjXIIzqATffq3H/Amng+JU6eITBJUeowR2Jaz+rRumuepmGirZQLE9JLncmnmL8lnf2kiWZAHsWvmuNh0jZRoNtN5iCADQAa30FtZvhLaC2moPIg9/bMFc2XWwB15C3bNMb+mect81q1XCqWYgKouxOwA3MwUcYrPkW7EAFmVTkQkAgF9rm+wudZqYNUxWZ6nSoh2FNB1KuRsvrHO7DMrZV0XS5zaGb9XA082fL0ytiysysR2NlIzDbeW75Z/HkZLRCoBt59vziSqSb4N1D7x+gkJJvg3UPvH6CZ7fTXT9kjEROZ1kREBERAREQEREBERAREQIzjj5aJYkAKcxJ2AAN/lOS4dTWmj4so3TpqUR3GemjEMy9gLFrkDeyg6idN6UIGw5Ui4ZlUjtVmCt8iZBoKdejqzZKiKbXZWKmzC1tQdttpthO4sssuXjdyKEARQFAAUAWCgCwAHYJeksQixAVgFsoLa5+iDmDc+Y7dJlXabSsLPK2ooZSrajTTKGBNxYlTobb+UwhmL+rZT0lbK46lQW6S3Gqta+ht2i+ttm0jOJvWpuKtM5kVLPT1JdLkuyDk6AAj81yDykUkTGVfVnQWsQdJzFfhiUsYoweSnUq5vXo4LUxQSxLqikFLuVXQgHMeydRSUZQ176X0Oh75jqYRXBzoG6GXNc57FsxS++W4Q7621mWTow/rUTE1A7U1UXpIW9XnJeshBFJlLWAuVZTc6MDysTq1uA0TUL1FFRnCkrUAdEcDX1avmKKTrluQJu4hksUUlXGRQ7oxuQcyWJIzgHlfU3nG0cbjMDiAmKf1mHqOQtVmQFWYlyxO43NwdLA5drScPHlG3z4/bpsPwmkrkqiLexUBFQo4AXoMtioIA0HZ3mbuGw6p0grA3Iuzsb8rm5v8ZmVhYD521HdNfE41c4RQzsSuYLeyoWIzsbWUaNvvawlr1lJJP61sOjhnDOWtUNmzXDKVDAZTcLbNbS18oPOZ5e6a6HTs+8pll4zy9rZN8G6h94/QSGCya4R+GfeP0Ez2+mmmfkkIiJzuoiIgIiICIiAiIgIiICIiBGcdS9LwYEeOo+85bhVNkw9JWFmWlTVgdwwQAj4zqeOsBRJJsAQSewTnqVRWvlYGzFTY3swNiD3gzfV6c237NjE4diEZWsyhgASxp2bLfMoIubLp2Rga5dbMLOpyuOV+RHapGoPf2gzP7Al1PaaxUlfsDbztf6SstkcF2c2tfSWXdqoIUZcjXa5urZksuXYgi5vyy98utI7ifDfXNSJcqKb5wB7Tgrkv3DpfESLjFplYkHG4vcEWPYe6QHpxhkbA1S46gDqRa6srDmdtCQe4mT8yVmphDntkALMWsVCqLljfkN/KRfBjOvLK3o9xJKAVajvTdQ7olQ+sW/SYZDa7XZrqCbnfWdF6O8fwioMMtOpT9WAp9ZTIAIJvnZSQhJB61hyE66qwJ6O1hqNiJiw+FRHd7ANUK5rU9WIGVczDewHlI9eU872KIwIBBBBFwQbgjtBlgdSdDfW2mtvG20i8fwqpSqo2GqNTR2cVkuDTDFcysitcUySCCVG7A2PPMtKujooZAhDA2Uko97rubsDqCxNy3ZeXl6zynEkJMcJ6h94/QSCpuxJDADstdgw7QdLeG8neE9Q+8foJnt+q+r7N+IiYOkiIgIiICIiAiIgIiICIiBC+lYJwlQC9ypAsLkG2mnOc1wRStEIUKsjMj3GjuGOZwfaDnpX/aN9bzr+M/hHxH1E51CCLg37CNjN9Xpz7fbcHUEuTaWr1Jcu01ii68pBgQESkQLl31lmJWmyFCL+sBQqRcFD1x4Zb/EdsrLs9rWAvte2tjuJW49TMuAa50002Hht4aSprE25eHPu8JjvKR8f9RMrPTJUa6lWUFWBDAi4ZW3FvjIrhmMLmpTdXz0nyFnAtUS10cEaXItpJZEuLnXTTymstMZiwFiQAf2gL2v4XMY8L3nleBJjhPUPvH6CQ95McJ6h94/QSu36r6vbfiInO6CIiAiIgIiICIiAiIgIiIEfxj8I+8v1E5DgFv0Sh/2af7gnX8Y/CPiPqJz6Lbu+031enPt9tsdSVXaUv0YWaxRWVEpNDG8SFOtQpZCTWZwGvYJkXMbjneKN+JqcXxpoYepVC5jTQtlJsGtyvY2mph+MF66Ukp3/UipWbNpRLqpRe8nXTsIPbI6jiWMSL47xCpR9Rky/rMTTpNmBPQe+a1iLHQazLxviP6PQeplzMLKi/ndiFQfEx043REh+G0eIJUHr6lJ0ZSWCpkak4tYJ+ceP/N/pLimTCVCl87gU0t1s7kItu/W/lJ6cS61CBaWCaPBMZ67DUqh3ZBm7nHRcf6gZrcHdjiMWCxIFZAoJJCj1KEgDlqSYnDv/iXtJjhXU/zH6CREl+E9TzP2mW30vq+zfiImDpIiICIiAiIgIiICIiAiIgRHpM1sLUObL0et+Xv8t5yPo/UW1Smq1VyVLZarhyuZQwCuGYlefSN+l5TtONAGiwO2lx2jMJy+AwdOimSlTVFuTZRYXO5+U31Tw5918pS3RlU2lvsyqHSaslZz3HT/AH7Ae/W/+YnRGatfA03qJUZbvTLFDmIylhZtAbHQc5FnhMrR9LD/AHHEf9o/aRPow7Yar+j1NRXVa1KpbpVDkXOjntUbfzE6mvRR1KOoZWFirC6sOwjnKrTUWso6Isug6I0Fh2DQfCPj5T8vHED6XNrhP/Po/wC6bPpRhKlTD/qxmdHSqq/nKOGy+NryVWqCSOY/mPsZYKwN+42t5/zk8R1x2AoLiMalZKFdArtUrNWJChiDlRF2PSPwkzx7AVa9SiisyIjNUeopXMjqLUwoPO5J2kt6/TbmO3QfCKb3W5jiLl5Rno9w+ph1qU2JZBUL03JBdlYAsGA2Oa/xmfh2DdKuIditqlRXWxJIUIqdLTQ3Xvm8YAj4ouS+8mOE9TzP2kKJNcJ/D8zM9s/Fpp9t+Iic7qIiICIiAiIgIiICIiAiIgRvHnC4dydhYnwDAmcd6P4w1cOjMwLAlHKsGUsptoRvcWPnOx46obDuCLg2BHaCwBnLYfDIhcoLZ2DsPZzZQtwOWij4To0+nNus6lL9GFbSYyeiPCXU5rxj1kvAlLyl5HFurrxeW3iTxFqxU1vy0G57+W3OESw17uZsbdx2l14LDmYR1YUFrfTQwgsLdnh8NJY9dRbXrNlBuLX8fI6S0YlDaxuDa1gSNTlHzkoZs0XmqMUCCQDomcX0uCWt3+z85mpuTe62sSB398nivV95OcJ/D/zH7SCvJ3hH4fmZlu+rfT7b8RE5XWREQEREBERAREQEREBERAj+M/gnxX94TksBVL00ZtyNdLczOu4x+C3+X94TlcNRCIEBNgNCd978p0afTk3+28eqJVDpKEdES5dpsxVmDFKxy5WYdKxt2HmfC3zmcSjOAQCRc7C+ptvaEtWn63nYDOdTqSlzYb/Pw0j1L5mINgXLEc2GREG3erHzHOZnrgMQeSq1+3MWFgP8hmF8ci30Oi5r6AEXUcz+2PnBxamFawzOepYg66k33vy+0yJhFFt7jLrzOQWH028e2Veu1wAhPQzX1KgkgWuBrpc+Uxj1jZri10sNbdIjXncG5I8pAzLRUAACwGw5dvnKimvYOXLs1E1fU1AujfnO+pJHR5DW/wBJccOxJuxI6PPcdEnt7CPM9sshnzjUX2Nj4kA/Q3lEdWFwezxF9ReU9SLk3OpBtfS4AH+0S9KYGgH9bQKyd4R+H5mQYk5wj8PzMy3fVro+zfiInK7CIiAiIgIiICIiAiIgIiIEdxs/3d/AfvCczTYm/jYeGk6bjf8Ah38B+8JzNLn732E6dH1rk3+24T0Zcm0tPVEqu01Y9ZGMwvTUsrHdb210uRY/KZJS8JWNSUtmKgm1rkctdP8A2b4mVampFraad22o28BLiZWBTaWmVMsZ1HP+r2hCsTF68Ha50voO68qHbkvPmeXbLIZImIF+7fv2uftaXoCBqbwLpOcJ/DHiZB3k7wr8MeJmO/020fZvxETldhERAREQEREBERAREQERECP43/h38B+8Jy9Ln7x+3fOn47/h38B+8JzNPn7x+06dH1rk/wDo+0bfs/12Sq7SnsyomzFfMdVmHVFzY87a20+cvMpeBjIc8wPLx/l85RqbEauduWh2sf4zIZUQMfqV7zoQddwd728JdkHIf1v95UxJFCYvEyphqjbI3mLfW0i2T3SY2+mGDN5OFVDvlHibn5TYp8HHtVCfAAfW8pduM/a00539Im8nuE/hDxMJwykPZv4kn5bTbpIqiwAA7ALD4THZsmU5HRq1XG9rJERMW5ERAREQEREBERAREQERECP4yL0G8B9ROZQW+N52GIoq6lW2O+sh6nAjfovp3rr8RNtWcxnK592FyvY0fZlVknT4PpZm+A/jMqcJQbsx+A+01u7GMppyv6RUoFJ218N5PJgaY9gHx1+s2FQDYAeEpd/+RpNF/dc+mEqHZD56fWZ6fC35kD5mTcSl3ZVeacYjE4SvNj5AAfO8zpw+kPZv4kn5HSbkSlzyv7XmGM/SxKarsAPAAS+ViVXIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICUlYgUlYiAiIgUlYiAiIgIiICIiAiIgIiICIiAiIgf/Z"
              rating={5}/>
              <Product
              title='the lean startup' 
              price={29.99}
              image=""
              rating={3}/>
          </div>
          <div className='home_row'>
              <Product
              title='the lean startup' 
              price={29.99}
              image=""
              rating={3}/>
              <Product
              title='the lean startup' 
              price={29.99}
              image=""
              rating={3}/>
              <Product 
              title='the lean startup' 
              price={29.99}
              image=""
              rating={3}/>
          </div>
          <div className='home_row'>
              <Product
              title='the lean startup' 
              price={29.99}
              image=""
              rating={3}/>
          </div>
        </div>
    </div>
  )
}

export default Home