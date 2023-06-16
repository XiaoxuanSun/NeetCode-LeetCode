class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // corner case
        if(strs == null || strs.length == 0) {
            return null;
        }
        List<List<String>> res = new ArrayList<>();
        Map<String, List<String>> map = new HashMap<>();
        for(String str: strs) {
            int[] tmp = new int[26];
            for(char c: str.toCharArray()) {
                tmp[c - 'a']++;
            }
            String key = Arrays.toString(tmp);
            if(!map.containsKey(key)) {
                map.put(key, new ArrayList<>());
            }
            map.get(key).add(str);
        }
        // for(String k: map.keySet()) {
        //     List<String> tmp = new ArrayList<>();
        //     for(String v: map.get(k)) {
        //         tmp.add(v);
        //     }
        //     res.add(tmp);
        // }
        res.addAll(map.values());
        return res;
    }
}

// time: O(nm)
// space: O(n)