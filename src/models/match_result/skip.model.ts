import { Cell } from "../cell.model";
import { Pattern } from "../patterns/pattern.interface";
import { CellVisitor } from "../visitors/cells/cellVisitor.interface";
import { PatternVisitor } from "../visitors/patterns/patternVisitor.interface";
import { MatchResult } from "./matchresult.interface";
import { MetaInformation } from '../metaInformationModel';

export class Skip implements MatchResult{

    /**
     * Funcion para evaluar la reaccion de un visitor en base al tipo de clase de matchresult
     * @param visitor cell visitor
     * @param cell celula actual
     * @param token token a evaluar (char)
     * @param index indice asociado al token
     * @returns el listado celulas al evaluar la clase skip en el cell visitor
     */
    reaction(visitor: CellVisitor, cell: Cell, token: string, index: number): Cell[] {
        
        return visitor.visitReactCellSkip(this,token,index);
    }
    
    /**
     * Funcion para evaluar el patron de una celula en base al tipo de clase de matchresult
     * @param visitor patron visitor
     * @param rightPattern patron derecho de la celula actual
     * @param environment meta información del entorno
     * @param token token a evaluar (char)
     * @returns el matchresult al evaluar la clase skip en el patron visitor
     */
    evaluation(visitor: PatternVisitor, rightPattern: Pattern, environment: MetaInformation, token: string): MatchResult {
        return visitor.visitEvaluationPatternSkip(this, rightPattern, environment, token);
    }

}