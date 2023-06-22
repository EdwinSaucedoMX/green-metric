import {
    Input,
    Stack,
    VStack,
    Text,
    StackDivider,
    InputLeftElement,
    InputGroup,
    Select,
    Icon
} from "@chakra-ui/react";

import { useState } from 'react';

import { MdLibraryAdd } from 'react-icons/md';


import DropImage from "./DropImage";
import ModuleInput from "./ModuleInput";
export default function Infraestructura() {
    const [species, setSpecies] = useState(1);
    const data =
        [
            { text: "Área total de su entidad o espacio de trabajo.", type: 5 },
            { text: "Área total de áreas verdes en su entidad o espacio de trabajo", type: 5, },
            { text: "Área total de cobertura plantada", type: 5, },
            { text: "Área total de cobertura forestal", type: 5, },
            { text: "Área total de su entidad donde se lleven a cabo actividades académicas (incluyendo edificios administrativos, edificios para actividades estudiantiles y del personal, salones, jardines únicamente con fines académicos).", type: 5, evidence: true, title: "Actividades académicas" },
            { text: "¿Cuántos edificios componen tu entidad?", type: 5, },
            { text: "Área total de la planta baja de los edificios de su entidad de trabajo.", type: 5, },
            { text: "Área total construida de su entidad de trabajo (tome en cuenta los distintos niveles que conforman las edificaciones).", type: 5, },
            { text: "Área correspondiente a jardines verticales.", type: 5, evidence: true, title: "Jardines verticales" },
            { text: "Área de techos verdes.", type: 5, evidence: true, title: "Techos verdes" },
            { text: "Área de azoteas útiles (con accesos seguros, multiusos, etc).", type: 5, evidence: true, title: "Azotes útiles" },
            { text: "Área destinada a la siembra de alimentos y plantas medicinales", type: 5, evidence: true, title: "Siembra de alimentos y plantas medicinales" },
            { text: "Área destinada a la siembra de plantas que promueven la polinización.", type: 5, evidence: true, title: "Siembra y polinización" },
            { text: "Área de estacionamientos sin asfalto o concreto; pueden tener grava, adoquín o asfalto permeable.", type: 5, evidence: true, title: "Estacionamientos sin asfalto o concreto" },
            { text: "Área total en el campus destinada para la absorción de agua; además de bosque y vegetación plantada. (suelo, césped, bloque de hormigón, campo sintético, etc.)", type: 5, evidence: true, title: "Absorción de agua" },
            { text: "Área de estacionamientos con sombreado natural.", type: 5, evidence: true, title: "Sombreado natural" },

        ]

    return (
        <VStack
            w="100%"
            divider={<StackDivider borderColor="gray.200" />}
            padding="30px"
            spacing={"30px"}
        >
            <h1>Infraestructura y escenarios</h1>
            <Stack spacing="30px" w="100%" padding="30px" className="column-3">
                <h3 className="expand-2 blue">Mencione el nombre de la especie y agregue una fotografía de evidencia dentro del recuadro</h3>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ text: `Especie ${species}:`, type: 1 }, { text: "Nombre científico: ", type: 1 }, { evidence: true }]} />
                </Stack>
                <Stack spacing="30px" className="grid-3-rows">
                    <ModuleInput add={true} />
                </Stack>

            </Stack>
            <Stack spacing="30px" w="100%" padding="30px" className="column-2 expand-2">
                <ModuleInput elements={data} title={"En caso de que aplique, añadir evidencia fotográfica de cada uno de los espacios indicados."} />
            </Stack>
            <Stack spacing="30px" padding="30px" className="column-3">
                <h3 className="expand-2 blue">Producción de alimentos y plantas medicinales. hortalizas, hongos etc. </h3>
                <h4 className="expand-2 blue">Responda a los siguientes requerimientos: </h4>
                <h5 className="blue text-start">Coloque la cantidad producida mensualmente de cada uno de los productos (en kg) y posteriormente coloque el nombre del producto en los recuadros punteados y añada evidencia fotográfica en el recuadro de mayor tamaño en caso de aplicar.</h5>
                <Stack spacing="30px">
                    <ModuleInput elements={[{ type: 4, holder: "Cantidad (kg)" }, { type: 1, holder: "Nombre del producto" }, { evidence: true }]} />
                </Stack>
                <Stack spacing="30px" className="grid-3-rows">
                    <ModuleInput add={true} />
                </Stack>
            </Stack>



        </VStack>
    );
}
