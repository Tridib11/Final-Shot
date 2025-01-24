package Java_Full_Stack;
import java.util.*;
public class FrequencySortLIst {

    public List<Character> frequencySort(String s) {
        //your code goe shere

        HashMap<Character,Integer> map=new HashMap<>();

        for(char ch:s.toCharArray()){
            map.put(ch,map.getOrDefault(ch,0)+1);
        }

        List<Character> list=new ArrayList<>(map.keySet());
        list.sort((ob1,ob2)->{
            int freqCompare=map.get(ob2)-map.get(ob1);
            if(freqCompare!=0){
                return freqCompare;
            }
            return ob1-ob2;
        });
        return list;

    }
}
