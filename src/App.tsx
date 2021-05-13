import React, { useCallback, useState } from "react";
import List from "./components/List/List";
import Header from "./components/Header/Header";
import { ClickHandler, Dict } from "./types";

type DataType = {
  name: string;
  email: string;
  birthdate: string;
};

function App() {
  const [selectedIndexes, setSelectedIndexes] = useState<Dict<boolean>>({});
  const [data] = useState<DataType[]>([
    {
      name: "Alden",
      email: "Nunc.lectus@vulputate.edu",
      birthdate: "Sat, May 07",
    },
    {
      name: "Ulric",
      email: "fames.ac@ProinvelitSed.net",
      birthdate: "Sun, Nov 08",
    },
    {
      name: "Lawrence",
      email: "Donec@Aenean.ca",
      birthdate: "Wed, Jun 09",
    },
    {
      name: "Tate",
      email: "luctus.Curabitur@Crasdictumultricies.net",
      birthdate: "Tue, Oct 12",
    },
    {
      name: "Tiger",
      email: "mattis.velit@ipsum.com",
      birthdate: "Sun, Dec 05",
    },
    {
      name: "George",
      email: "dictum@ridiculusmus.org",
      birthdate: "Thu, Nov 05",
    },
    {
      name: "Reese",
      email: "mauris@Aliquameratvolutpat.net",
      birthdate: "Wed, Jul 15",
    },
    {
      name: "Ishmael",
      email: "semper.pretium@Sed.com",
      birthdate: "Thu, Dec 09",
    },
    {
      name: "Noble",
      email: "et.malesuada.fames@varius.org",
      birthdate: "Wed, Oct 28",
    },
    {
      name: "Rafael",
      email: "Proin.dolor@pharetraQuisque.net",
      birthdate: "Thu, Nov 18",
    },
    {
      name: "Flynn",
      email: "eu.erat.semper@aliquet.ca",
      birthdate: "Thu, Mar 18",
    },
    {
      name: "Micah",
      email: "nunc.risus.varius@malesuada.net",
      birthdate: "Wed, May 05",
    },
    {
      name: "Christian",
      email: "mauris@Nulla.ca",
      birthdate: "Thu, Nov 18",
    },
    {
      name: "Merrill",
      email: "dui.nec.tempus@conubianostraper.co.uk",
      birthdate: "Fri, Oct 16",
    },
    {
      name: "William",
      email: "Aenean.sed@dolor.co.uk",
      birthdate: "Wed, Oct 27",
    },
    {
      name: "Elmo",
      email: "In@Etiamimperdiet.com",
      birthdate: "Thu, Dec 09",
    },
    {
      name: "Ahmed",
      email: "diam.nunc@justosit.com",
      birthdate: "Tue, Jun 15",
    },
    {
      name: "Norman",
      email: "purus@dui.org",
      birthdate: "Tue, Mar 08",
    },
    {
      name: "Caldwell",
      email: "commodo.at@odioNam.co.uk",
      birthdate: "Wed, Dec 08",
    },
    {
      name: "Jerry",
      email: "tellus.faucibus.leo@semvitae.net",
      birthdate: "Thu, May 06",
    },
    {
      name: "Dane",
      email: "enim.diam.vel@egestasascelerisque.net",
      birthdate: "Sun, Oct 10",
    },
    {
      name: "Oren",
      email: "ut.molestie.in@nibhPhasellusnulla.com",
      birthdate: "Fri, Nov 13",
    },
    {
      name: "Acton",
      email: "natoque@amet.edu",
      birthdate: "Fri, Jun 05",
    },
    {
      name: "Damian",
      email: "tincidunt.orci@erateget.net",
      birthdate: "Thu, Mar 18",
    },
    {
      name: "Keane",
      email: "Cum.sociis.natoque@miAliquamgravida.org",
      birthdate: "Thu, Sep 10",
    },
    {
      name: "Elmo",
      email: "sapien.Nunc@sociis.net",
      birthdate: "Tue, Nov 23",
    },
    {
      name: "Reese",
      email: "molestie.arcu.Sed@anteblandit.edu",
      birthdate: "Sun, Mar 06",
    },
    {
      name: "Knox",
      email: "Nam.consequat@mienim.ca",
      birthdate: "Tue, Jan 26",
    },
    {
      name: "Talon",
      email: "montes.nascetur@faucibusutnulla.ca",
      birthdate: "Tue, Nov 10",
    },
    {
      name: "Joshua",
      email: "sed.est@auctorvelitAliquam.ca",
      birthdate: "Thu, Apr 21",
    },
    {
      name: "Myles",
      email: "libero.Donec.consectetuer@vitaealiquameros.com",
      birthdate: "Sun, Sep 26",
    },
    {
      name: "Harlan",
      email: "non@massa.net",
      birthdate: "Wed, Aug 04",
    },
    {
      name: "Sawyer",
      email: "nibh.enim.gravida@ut.co.uk",
      birthdate: "Sat, Mar 13",
    },
    {
      name: "Laith",
      email: "id.mollis@dolor.net",
      birthdate: "Sat, Jul 03",
    },
    {
      name: "Jesse",
      email: "ultricies@Donecfringilla.org",
      birthdate: "Fri, Apr 22",
    },
    {
      name: "John",
      email: "lobortis.ultrices.Vivamus@dignissimtemporarcu.ca",
      birthdate: "Thu, Jun 25",
    },
    {
      name: "Fritz",
      email: "dapibus.gravida@milorem.net",
      birthdate: "Sun, Nov 21",
    },
    {
      name: "John",
      email: "commodo@luctusut.com",
      birthdate: "Thu, Mar 17",
    },
    {
      name: "Sawyer",
      email: "varius.ultrices.mauris@temporbibendum.net",
      birthdate: "Mon, Mar 21",
    },
    {
      name: "Merritt",
      email: "est.mauris@Vivamus.org",
      birthdate: "Thu, Oct 28",
    },
    {
      name: "Gabriel",
      email: "risus.Morbi.metus@liberomauris.ca",
      birthdate: "Sat, Apr 09",
    },
    {
      name: "Hector",
      email: "Quisque@Duisdignissim.ca",
      birthdate: "Sat, Dec 04",
    },
    {
      name: "Keith",
      email: "gravida@etmagnis.org",
      birthdate: "Tue, Dec 21",
    },
    {
      name: "Myles",
      email: "dolor.Quisque@scelerisquescelerisque.com",
      birthdate: "Sat, Oct 03",
    },
    {
      name: "Jasper",
      email: "nulla@semPellentesque.org",
      birthdate: "Wed, Nov 11",
    },
    {
      name: "Brennan",
      email: "orci.Ut@Phasellusin.org",
      birthdate: "Thu, Nov 05",
    },
    {
      name: "Clinton",
      email: "parturient.montes.nascetur@utpellentesque.net",
      birthdate: "Mon, Apr 18",
    },
    {
      name: "Merrill",
      email: "purus.Duis@ultricesDuis.edu",
      birthdate: "Sat, Jul 04",
    },
    {
      name: "Hunter",
      email: "ac.mattis@Curabitur.org",
      birthdate: "Sat, Jul 24",
    },
    {
      name: "Marsden",
      email: "Mauris.vel@Phasellusdolorelit.com",
      birthdate: "Fri, Jun 26",
    },
    {
      name: "Phelan",
      email: "accumsan.convallis@egestas.org",
      birthdate: "Thu, Apr 14",
    },
    {
      name: "Jarrod",
      email: "nonummy.ipsum.non@Cras.net",
      birthdate: "Wed, Feb 16",
    },
    {
      name: "Sylvester",
      email: "Duis.risus.odio@dolor.ca",
      birthdate: "Thu, Oct 29",
    },
    {
      name: "Asher",
      email: "vulputate@lacusAliquam.ca",
      birthdate: "Wed, Mar 09",
    },
    {
      name: "Wesley",
      email: "ut.sem.Nulla@DonecfringillaDonec.ca",
      birthdate: "Mon, Oct 04",
    },
    {
      name: "Cade",
      email: "Curabitur@ac.ca",
      birthdate: "Sat, Jul 04",
    },
    {
      name: "Malik",
      email: "ad@magnisdisparturient.edu",
      birthdate: "Wed, Apr 28",
    },
    {
      name: "Wallace",
      email: "massa.rutrum.magna@malesuada.net",
      birthdate: "Wed, Sep 22",
    },
    {
      name: "Kirk",
      email: "semper.dui.lectus@magnaSed.org",
      birthdate: "Sun, Aug 23",
    },
    {
      name: "Rogan",
      email: "amet@tristiqueac.ca",
      birthdate: "Thu, Jul 08",
    },
    {
      name: "Walker",
      email: "tempus.eu@eu.org",
      birthdate: "Wed, Dec 02",
    },
    {
      name: "Paki",
      email: "Phasellus.ornare.Fusce@ultriciesligulaNullam.edu",
      birthdate: "Fri, Jul 03",
    },
    {
      name: "Deacon",
      email: "porttitor.scelerisque@tellusjusto.edu",
      birthdate: "Mon, Nov 23",
    },
    {
      name: "Cedric",
      email: "tincidunt.dui@est.edu",
      birthdate: "Sun, Oct 25",
    },
    {
      name: "Jeremy",
      email: "gravida.nunc.sed@interdumliberodui.co.uk",
      birthdate: "Thu, Jul 15",
    },
    {
      name: "Harrison",
      email: "Fusce.aliquam.enim@Nuncquisarcu.edu",
      birthdate: "Wed, Mar 03",
    },
    {
      name: "Griffith",
      email: "Sed.malesuada@sociis.ca",
      birthdate: "Sat, Sep 11",
    },
    {
      name: "Drake",
      email: "tempus.scelerisque.lorem@Mauris.co.uk",
      birthdate: "Wed, Aug 12",
    },
    {
      name: "Elliott",
      email: "ante@Fuscemilorem.co.uk",
      birthdate: "Mon, Aug 17",
    },
    {
      name: "Garrison",
      email: "nulla.vulputate@vehiculaaliquet.edu",
      birthdate: "Sun, May 16",
    },
    {
      name: "Tate",
      email: "nisi.Cum@lacusEtiambibendum.co.uk",
      birthdate: "Wed, Aug 11",
    },
    {
      name: "Abbot",
      email: "ultricies@erat.com",
      birthdate: "Sun, Mar 06",
    },
    {
      name: "Robert",
      email: "molestie.in@arcuimperdiet.org",
      birthdate: "Wed, Jul 01",
    },
    {
      name: "Elliott",
      email: "In.mi@ipsumCurabitur.com",
      birthdate: "Sun, Sep 19",
    },
    {
      name: "Grant",
      email: "ante@sem.edu",
      birthdate: "Tue, Feb 16",
    },
    {
      name: "Avram",
      email: "amet@Nam.org",
      birthdate: "Sat, Mar 05",
    },
    {
      name: "Chaney",
      email: "sem.elit.pharetra@quisarcuvel.org",
      birthdate: "Tue, Feb 16",
    },
    {
      name: "Hiram",
      email: "eu.tempor.erat@massarutrum.ca",
      birthdate: "Thu, Dec 17",
    },
    {
      name: "Blake",
      email: "lorem.Donec.elementum@accumsanconvallisante.edu",
      birthdate: "Mon, Sep 06",
    },
    {
      name: "Drake",
      email: "posuere@estMauriseu.edu",
      birthdate: "Tue, Feb 02",
    },
    {
      name: "Daniel",
      email: "ipsum.Donec.sollicitudin@necleoMorbi.com",
      birthdate: "Tue, Oct 19",
    },
    {
      name: "Hoyt",
      email: "vulputate.velit.eu@elementumsem.edu",
      birthdate: "Sat, Jul 31",
    },
    {
      name: "Demetrius",
      email: "Phasellus@nuncullamcorpereu.ca",
      birthdate: "Sun, May 01",
    },
    {
      name: "Stewart",
      email: "lacus.Aliquam@ametorciUt.org",
      birthdate: "Sat, Nov 14",
    },
    {
      name: "Clinton",
      email: "libero@egestas.com",
      birthdate: "Sat, Dec 18",
    },
    {
      name: "Henry",
      email: "velit.justo.nec@parturient.ca",
      birthdate: "Thu, Jun 11",
    },
    {
      name: "Michael",
      email: "egestas.a.dui@Quisquetincidunt.net",
      birthdate: "Tue, Jan 04",
    },
    {
      name: "Clarke",
      email: "Nam.porttitor@sodales.net",
      birthdate: "Mon, Sep 21",
    },
    {
      name: "Reese",
      email: "tempus.eu.ligula@Aliquamadipiscing.org",
      birthdate: "Mon, Mar 01",
    },
    {
      name: "Burke",
      email: "sem@diamPellentesque.ca",
      birthdate: "Sat, Nov 27",
    },
    {
      name: "Matthew",
      email: "metus.Aenean.sed@condimentumDonecat.net",
      birthdate: "Sun, May 09",
    },
    {
      name: "Castor",
      email: "Phasellus.fermentum.convallis@vitaediamProin.org",
      birthdate: "Wed, Jan 26",
    },
    {
      name: "Knox",
      email: "quam.quis.diam@asollicitudinorci.com",
      birthdate: "Mon, Oct 04",
    },
    {
      name: "Lester",
      email: "amet.nulla@massa.net",
      birthdate: "Fri, Oct 15",
    },
    {
      name: "Declan",
      email: "semper@Aeneaneuismod.co.uk",
      birthdate: "Mon, Apr 05",
    },
    {
      name: "Patrick",
      email: "amet.consectetuer@vitaeorciPhasellus.co.uk",
      birthdate: "Fri, Jul 10",
    },
    {
      name: "Quamar",
      email: "ornare.libero@Nullainterdum.com",
      birthdate: "Wed, Sep 01",
    },
    {
      name: "Leroy",
      email: "rhoncus.id@rutrumloremac.org",
      birthdate: "Tue, Sep 01",
    },
    {
      name: "Fletcher",
      email: "Donec.nibh@molestieSed.edu",
      birthdate: "Sat, Jul 04",
    },
    {
      name: "Amir",
      email: "Nam.interdum@vulputatemauris.net",
      birthdate: "Fri, Feb 26",
    },
  ]);
  const handleClick: ClickHandler<number> = useCallback(
    (index: number) => {
      setSelectedIndexes((selectedIndexes) => {
        const aux = {
          ...selectedIndexes,
        };
        if (aux[index]) {
          delete aux[index];
          return aux;
        }
        aux[index] = true;
        return aux;
      });
    },
    [setSelectedIndexes]
  );
  const selectedElements = Object.keys(selectedIndexes).map((e) => parseInt(e));

  const renderer = useCallback(
    ({ name, email, birthdate }) => (
      <>
        <p>
          {name} ({email})
        </p>
        <p>{birthdate}</p>
      </>
    ),
    []
  );

  console.log("renderer App");
  return (
    <div id="App">
      <Header selectedElements={selectedElements} handleClick={handleClick} />
      <List
        list={data}
        renderer={renderer}
        handleClick={handleClick}
        selectedIndexes={selectedIndexes}
      />
    </div>
  );
}

export default App;
