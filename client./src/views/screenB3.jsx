import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowRight from "../components/arrowright";

function ScreenB3() {
  const navigate = useNavigate();
  const location = useLocation();

  async function ButtonClick(e) {
    navigate("../screenC2", {
      replace: true,
      state: { prevPath: location.pathname },
    });
  }

  return (
    <div id="screenB2">
      <div id="b2Container">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          veritatis eius dolorem culpa harum, aliquam delectus rem at facilis
          doloremque iste libero placeat repellat, dicta tempora quia commodi.
          Laborum pariatur, repellendus quibusdam corrupti, iure a nulla ipsum
          voluptatibus quia natus tenetur minima! Quod veritatis saepe quaerat
          dignissimos reiciendis magni odit, sequi, ipsam incidunt voluptates
          consectetur tempora hic error, eligendi earum ex cumque. Distinctio
          architecto, ut consequatur dicta quaerat delectus rerum dolorum
          laudantium fugit ullam maxime culpa reprehenderit maiores nisi eveniet
          ducimus? Illum, recusandae architecto? Veniam beatae quas minima
          quidem vero unde laboriosam, error ipsam culpa non placeat impedit
          asperiores soluta dicta expedita autem in sunt id deleniti sequi
          dolores commodi, reiciendis officia ex. Rem possimus maiores nulla.
          Vitae explicabo repudiandae maiores officia laudantium vero suscipit
          quisquam quia nemo, consequatur qui mollitia veritatis provident.
          Praesentium aut exercitationem sapiente voluptas quaerat reiciendis
          sint nesciunt alias fuga quo commodi dicta veniam suscipit ullam quasi
          voluptate assumenda optio, iure numquam. Laborum tempore illo
          aspernatur iste cumque voluptas dolore neque reprehenderit sint nihil
          sapiente, vitae, aliquam saepe architecto laudantium reiciendis
          consectetur laboriosam eligendi natus molestias tenetur quis! Odio
          error dolore vero, quia saepe ad quas id exercitationem, deserunt,
          adipisci quidem? Totam labore obcaecati nisi praesentium non eum ipsum
          voluptatum, fugiat doloremque maiores velit expedita dolorem atque
          ratione, consectetur dolorum tenetur corporis sint beatae quam ea
          perferendis nam vel. Soluta, repudiandae asperiores et assumenda
          consequuntur doloremque necessitatibus magni voluptate distinctio
          dolorem id? Consequuntur ipsam magni alias pariatur, natus nostrum
          voluptatum hic autem animi ex tempora optio dolor explicabo! Vitae,
          est perspiciatis? Autem reiciendis sed similique assumenda eos nostrum
          non illum incidunt. Ducimus nam delectus ad distinctio est quis veniam
          molestiae dolores. Nesciunt laboriosam, beatae voluptates sapiente
          molestiae culpa deserunt sint cupiditate ea quam quo aperiam dicta
          fuga excepturi aliquam aliquid harum in. Enim porro iusto recusandae
          nobis inventore explicabo praesentium cumque commodi et odit, fugiat
          placeat. delectus modi velit!
        </p>
        <ArrowRight onClick={ButtonClick} />
      </div>
    </div>
  );
}

export default ScreenB3;
